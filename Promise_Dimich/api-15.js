import axios1 from "./axios1";

const api = {
    sendStudentsCountToItKamasutra(studentsCount) {
        return axios1.post("https://it-kamasutra.com/students-need",
            { count: studentsCount })
            .then(res => res.data);
    },
    getVacanciesCountFromMicrosoft() {
        return axios1.get("https://microsoft.com")
            .then(res => res.data);
    },
    getVacanciesCountFromGoogle() {
        return axios1.get("https://google.com")
            .then(res => res.data);
    }
}