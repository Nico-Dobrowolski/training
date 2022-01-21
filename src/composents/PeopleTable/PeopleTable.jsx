import PeopleItem from "../PeopleItem/PeopleItem"

const PeopleTable = ({data}) => {

    return (
      <>
        <table className="table is-fullwidth">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Genre</th>
                    <th>Année de naissance</th>
                </tr>
            </thead>
            <tbody>
              {Array.isArray(data.results) ? 
                data.results.map(({name, gender, birth_year}, index) => {
                  return (              
                    <PeopleItem key={index} name={name} gender={gender} birth_year={birth_year} />
                  )             
                })
                :
                <p>No data</p>
              }
            </tbody>
            
        </table>
      </>

    )
}

export default PeopleTable