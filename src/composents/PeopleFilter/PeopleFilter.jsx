
const PeopleFilter = ({onChangeFilter,filter}) => {

    return (
        <div className="field">
            <div className="control">
            <input
                autoFocus="true"
                className="input is-info"
                type="text"
                value={filter}
                onChange={(event) => onChangeFilter(event.target.value)}
            />
            </div>
        </div>
    )
}
export default PeopleFilter