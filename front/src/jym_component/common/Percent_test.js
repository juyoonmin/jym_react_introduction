import { useEffect, useState } from "react"


function Percent_test(props) {

    const [Skillscroll, setSkillscroll] = useState({scrollY:0})


    useEffect(() => {
        function updateSkillscroll() {
            setSkillscroll({ scrollY: window.scrollY })
        }
        window.addEventListener('scroll', updateSkillscroll)
        updateSkillscroll()
    
        return () => window.removeEventListener('scroll', updateSkillscroll)
        
    }, [])
    return Skillscroll
}

export default Percent_test;