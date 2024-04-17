import i18n from "@/app/_i18n"

const useEn = ()=>{
    localStorage.setItem('lang' , 'en')
    document.dir = 'ltr'
    i18n.changeLanguage('en')
}

export default useEn