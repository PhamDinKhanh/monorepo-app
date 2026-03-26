package expo.modules.datasync.data.remote.api

import retrofit2.converter.kotlinx.serialization.asConverterFactory
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import retrofit2.Retrofit
import java.util.concurrent.TimeUnit

object NetworkClient {
    private const val BASE_URL = "https://pokeapi.co/"

    // 1. Cấu hình kotlin.serialization
    private val json = Json {
        // CỰC KỲ QUAN TRỌNG: Bỏ qua các keys API trả về mà Model không khai báo
        ignoreUnknownKeys = true
        // Ép kiểu an toàn (ví dụ API trả null nhưng type là String, nó sẽ gán default)
        coerceInputValues = true
    }

    // 2. Cấu hình OkHttp Engine
    private val okHttpClient = OkHttpClient.Builder()
        .connectTimeout(30, TimeUnit.SECONDS)
        .readTimeout(30, TimeUnit.SECONDS)
        // Bạn có thể .addInterceptor() ở đây sau này
        .build()

    val retrofit: Retrofit = Retrofit.Builder()
        .baseUrl(BASE_URL)
        .client(okHttpClient)
        // Tích hợp kotlinx.serialization vào Retrofit
        .addConverterFactory(json.asConverterFactory("application/json".toMediaType()))
        .build()

    // Tạo instance của ApiService
    val pokeApi: PokeApiService = retrofit.create(PokeApiService::class.java)
}