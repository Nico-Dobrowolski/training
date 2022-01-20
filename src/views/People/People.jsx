import { useEffect, useState } from "react"
import PeopleFilter from "../../composents/PeopleFilter/PeopleFilter"
import PeopleTable from "../../composents/PeopleTable/PeopleTable"


const People = () => {

    const [sw,setSw] = useState({})
    const [filter,setFilter] = useState('')
    const [loading,setLoading] = useState(true)

    //Bloqué par la création de hooks costum 'useFetch()'
    useEffect(() => {
        fetch(`https://swapi.dev/api/people?search=${filter}`)
        .then(res => res.json())
        .then((result) => {
            setSw(result.results)
            setLoading(false)
        },
        (error) => {
            console.log('error fetch',error);
            setLoading(false)
        }
        )
    }, [filter])

    //Callback
    const onFilter = (filter) => {
        setFilter(filter);
    }

    //Rendering 
    if (loading) {
        return (
            <progress className="progress is-small is-primary" max="100"></progress>
        );
    }

    return (
      <>
        <PeopleFilter onFilter={onFilter} filter={filter}/>
        <PeopleTable sw={sw}/>
      </>

    )
}

export default People