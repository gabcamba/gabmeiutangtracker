import React from 'react'

const AddUtangButton = ({toggleModal}) => {
    return (
        <>
            <div onClick={() => toggleModal()} style={{display: 'flex', justifyContent: 'center', fontSize: '55px', color: 'white', backgroundColor: '#80989b', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', height: '70px', width: '70px', position: 'fixed', bottom: 30, right: 30, borderRadius: 50}}>
            +
            </div>
        </>
    )
}

export default AddUtangButton