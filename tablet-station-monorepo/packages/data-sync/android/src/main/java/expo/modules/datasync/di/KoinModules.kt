package expo.modules.datasync.di

import expo.modules.datasync.core.network.AndroidNetworkMonitor
import expo.modules.datasync.core.network.NetworkMonitor
import expo.modules.datasync.di.provider.provideOkHttpClient
import expo.modules.datasync.di.provider.provideRetrofit
import org.koin.android.ext.koin.androidContext
import org.koin.dsl.module

val coreModule = module {
    single<NetworkMonitor> { AndroidNetworkMonitor(androidContext()) }
    // 2. Network
    single { provideOkHttpClient() }
    single { provideRetrofit(get()) }
}