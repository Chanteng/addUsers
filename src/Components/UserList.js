import React, {useState} from 'react'

function UserList(props) {

    const users = props.user;

    return (

        <div>
        {  
          users.map((user, index) => {return (
              <div key={index}>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.gen}</h2>
              </div>
            );
          })
        }
      </div>

    )
}

export default UserList;