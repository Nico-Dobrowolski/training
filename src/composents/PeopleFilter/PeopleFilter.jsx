
const PeopleFilter = ({onFilter,filter}) => {

    return (
        <div className="field">
            <div className="control">
            <input
                className="input is-info"
                type="text"
                value={filter}
                onChange={(event) => onFilter(event.target.value)}
            />
            </div>
        </div>
    )
}
export default PeopleFilter