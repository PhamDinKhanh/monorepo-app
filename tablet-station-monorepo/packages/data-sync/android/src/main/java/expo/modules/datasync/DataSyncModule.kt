package expo.modules.datasync

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class DataSyncModule : Module() {
  private val context: Context
    get() = appContext.reactContext ?: throw Exception("React context not found")

  private val connectivityManager by lazy {
    context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
  }

  // Định nghĩa Callback để lắng nghe thay đổi
  private val networkCallback = object : ConnectivityManager.NetworkCallback() {
    override fun onAvailable(network: Network) {
      sendNetworkEvent(true)
    }

    override fun onLost(network: Network) {
      sendNetworkEvent(false)
    }
  }

  private fun sendNetworkEvent(isConnected: Boolean) {
    // Xác định loại mạng (Wifi/Cellular)
    val activeNetwork = connectivityManager.activeNetwork
    val capabilities = connectivityManager.getNetworkCapabilities(activeNetwork)
    val type = when {
      capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true -> "wifi"
      capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) == true -> "cellular"
      else -> "none"
    }

    // Gửi event về JS với đúng cấu trúc Payload
    sendEvent("onNetworkStatusChange", mapOf(
      "isConnected" to isConnected,
      "type" to type
    ))
  }

  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('DataSync')` in JavaScript.
    Name("DataSync")

    // Defines constant property on the module.
    Constant("PI") {
      Math.PI
    }

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      "Hello world! 👋"
    }

    // Defines a JavaScript function that always returns a Promise and whose native code
    // is by default dispatched on the different thread than the JavaScript runtime runs on.
    AsyncFunction("setValueAsync") { value: String ->
      // Send an event to JavaScript.
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    //Define a function to get the battery percentage.
    Function("getBatteryLevel") {
      // Lấy context của ứng dụng React Native hiện tại
      val context = appContext.reactContext ?: return@Function -1
      
      val batteryManager = context.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
      val batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
      
      return@Function batteryLevel
    }

    //Define a function to get the battery percentage.
    // Đăng ký tên sự kiện mà JS sẽ lắng nghe
    Events("onNetworkStatusChange")

    // Hàm bổ trợ để bắn event về JS
    Function("startObservingNetwork") {
      val request = NetworkRequest.Builder()
        .addCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
        .build()
      connectivityManager.registerNetworkCallback(request, networkCallback)
    }

    Function("stopObservingNetwork") {
      connectivityManager.unregisterNetworkCallback(networkCallback)
    }
  }
}
