import React from 'react'
import { IssuesTable } from '../../Components/Table/IssuesTable'

function Issues() {
    return (
        <div className='ms-7 me-4 mt-4 border h-[calc(100vh-8.5rem)] rounded-md'>
            <IssuesTable />
        </div>
    )
}

export default Issues