import {useState} from 'react'

const AddTask = ({addTasks}) => {
    const[text,setText] = useState('')
    const[date,setDay] = useState('')
    const[reminder,setReminder] = useState(false)

const onSubmit=(e)=>{
    if(!text){
        alert('Please enter a task')
        return
    }
   
    e.preventDefault()
    addTasks({date,text,reminder})
   
    setText('')
    setDay('')
    setReminder(false)
}

    return (
        <div>
            <form className="add-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add new task" value={text} onChange={(e)=>setText((e).target.value)} />
                </div>
                <div className="form-control">
                    <label>Date</label>
                    <input type="text" placeholder="Add new Date" value={date} onChange={(e)=>setDay((e).target.value)} />
                </div>
                <div className="form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder((e).currentTarget.checked)}/>
                </div>
                <div className="form-control-submit">
                <input type="submit"  value="Save Task"/>
                </div>
            </form>
        </div>
    )
}

export default AddTask
