import './styles.css';

export default function DisplayTask(props) {
    const arr = props.data || []; // Fallback to an empty array if no data is provided

    const listItems = arr.map((val) => (
        <li key={val.id}>
            <span style={{ textDecoration: val.isComplete ? 'line-through' : 'none' }}>
                {val.todo}
            </span>
            <input
                type="checkbox"
                checked={val.isComplete}
                onChange={() => props.onToggle(val.id)} // Toggle based on unique id
            />
            <button
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => props.onDelete(val.id)} // Delete based on unique id
            >
                🗑️
            </button>
        </li>
    ));

    return <div id='items'>
     <ol>{listItems}</ol>
     </div>
}
