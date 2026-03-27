package expo.modules.datasync.data.repository

import expo.modules.datasync.data.remote.NetworkClient
import expo.modules.datasync.data.remote.dto.PokemonResponse
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

class PokemonRepository {
    private val api = NetworkClient.pokeApi

    suspend fun fetchPokemon(name: String): PokemonResponse? {
        return withContext(Dispatchers.IO) {
            try {
                // Gọi API thực tế
                val result = api.getPokemonDetail(name.lowercase())
                println("Thành công! Lấy được dữ liệu của: ${result.name}, nặng: ${result.weight}")
                result
            } catch (e: Exception) {
                println("Lỗi gọi API: ${e.message}")
                null
            }
        }
    }






}