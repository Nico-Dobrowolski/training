import { useEffect, useState } from "react"
import PeopleFilter from "../../composents/PeopleFilter/PeopleFilter"
import PeopleTable from "../../composents/PeopleTable/PeopleTable"

const People = () => {


    const [data,setData] = useState({})
    const [filter,setFilter] = useState('')
    const [loading,setLoading] = useState(true)

    //Bloqué par la création de hooks costum 'useFetch()'
    useEffect(() => {
        setLoading(true)
        fetch(`https://swapi.dev/api/people/?search=${filter}`)
        .then(res => res.json())
        .then((result) => {
            //Init variables to table
            setData(result)
            setLoading(false)
        },
        (error) => {
            console.log('error fetch',error);
            setLoading(false)
        }
        )
    }, [filter])

    //Callback
    const onChangeFilter = (filter) => {
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
        <PeopleFilter onChangeFilter={onChangeFilter} filter={filter} />
        <PeopleTable data={data}  />
      </>

    )
}

export default People