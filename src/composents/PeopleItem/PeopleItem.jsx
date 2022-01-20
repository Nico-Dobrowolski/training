const PeopleItem = ({name, gender, birth_year, index}) => {
    return (
        <tr key={index}>
            <td>{name}</td>
            <td>{gender}</td>
            <td>{birth_year}</td>
        </tr> 
    )
}

export default PeopleItem