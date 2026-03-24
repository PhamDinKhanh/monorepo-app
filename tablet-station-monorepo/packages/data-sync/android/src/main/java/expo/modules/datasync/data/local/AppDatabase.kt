package expo.modules.datasync.data.local

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase


//@Database(entities = [DataEntity::class, SyncQueueEntity::class], version = 1)
abstract class AppDatabase: RoomDatabase () {
//    abstract fun dataDao(): DataDao
//    abstract fun syncQueueDao(): SyncQueueDao
//
//    companion object {
//        fun build(context: Context, passphrase: ByteArray): AppDatabase {
//            val factory = SupportOpenHelperFactory(passphrase)
//            return Room.databaseBuilder(context, AppDatabase::class.java, "baby_secure.db")
//                .openHelperFactory(factory)
//                .build()
//        }
//    }
}