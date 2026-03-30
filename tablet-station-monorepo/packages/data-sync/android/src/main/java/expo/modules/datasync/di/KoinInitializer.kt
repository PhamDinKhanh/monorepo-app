package expo.modules.datasync.di

import android.content.Context
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.GlobalContext
import org.koin.core.context.startKoin


object KoinInitializer {
    fun start(context: Context) {
        if (GlobalContext.getOrNull() == null) {
            startKoin {
                androidContext(context.applicationContext)
                modules(coreModule)
            }
        }
    }
}