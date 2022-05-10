import axios1 from "./axios1";

const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios1.post("https://it-kamasutra.com/students-need",
        { count: studentsCount });
    },
    getVacanciesCountFromMicrosoft() {
        return axios1.get("https://microsoft.com");
    },
    getVacanciesCountFromGoogle() {
        return axios1.get("https://google.com");
    }
}