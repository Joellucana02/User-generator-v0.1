const d = document,
    $submit = d.getElementById('submit-n'),
    $btnPrincipal = d.querySelector('.btn-principal'),
    $btnMan = d.querySelector('.btn-men'),
    $btnWoman = d.querySelector('.btn-women'),
    $profilePhoto = d.querySelector('.image'),
    $profileName = d.querySelector('.profile__name'),
    $profileMail = d.querySelector('.profile__mail'),
    $profileBirthday = d.querySelector('.profile__birthday'),
    $profileAddress = d.querySelector('.profile__address'),
    $profilePhone = d.querySelector('.profile__phone');

randomUser = 'https://randomuser.me/api/',
    randomUserFemale = 'https://randomuser.me/api/?gender=female',
    randomUserMale = 'https://randomuser.me/api/?gender=male';
$btnPrincipal.addEventListener('click', () => {
    requestData(randomUser);

    /* d.addEventListener("DOMContentLoaded", requestData()); */
    /* console.log('Im running') */
})
$btnMan.addEventListener('click', () => {
    requestData(randomUserMale);
})
$btnWoman.addEventListener('click', () => {
    requestData(randomUserFemale);
})
let requestData = async (link) => {
    try {
        let responseGet = await axios.get(link);
        let userData = await responseGet.data;
        /* console.log(responseGet, userData); */
        console.log(userData.results[0]);
        let picture = userData.results[0].picture.large,
            nameF = userData.results[0].name.first,
            nameL = userData.results[0].name.last,
            name = `${nameF} ${nameL}`,
            mail = userData.results[0].email,
            countryS = userData.results[0].location.state,
            countryN = userData.results[0].location.country,
            country = `${countryS}, ${countryN}`,
            addressNu = userData.results[0].location.street.number,
            addressNa = userData.results[0].location.street.name,
            address = `${addressNa} ${addressNu}`,
            phone = userData.results[0].phone;

        uploadData(picture, name, mail, country, address, phone)
    } catch (error) {
        console.log(error.response);
    } finally {
        console.log('Im running');
    }

}
let uploadData = (pP, pN, pM, pB, pA, pPh) => {
    $profilePhoto.src = pP;
    $profileName.innerHTML = pN;
    $profileMail.innerHTML = pM;
    $profileBirthday.innerHTML = pB;
    $profileAddress.innerHTML = pA;
    $profilePhone.innerHTML = pPh;
}
$submit.addEventListener("click", (e) => {
    e.preventDefault();
});