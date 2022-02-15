export default {
  changeCity (state, cityName) {
    state.city = cityName
    try {
      localStorage.city = cityName
    } catch (e) { }
  }
}
