package expo.modules.datasync.data.remote.api

import expo.modules.datasync.data.remote.dto.PokemonResponse
import retrofit2.http.GET
import retrofit2.http.Path

interface PokeApiService {

    @GET("api/v2/pokemon/{name}")
    suspend fun getPokemonByName(@Path("name") name: String): PokemonResponse
}
