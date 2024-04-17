import i18n from "@/app/_i18n"

const useFa = ()=>{
    localStorage.setItem('lang' , 'fa')
    document.dir = 'rtl'
    i18n.changeLanguage('fa')
}


export default useFa