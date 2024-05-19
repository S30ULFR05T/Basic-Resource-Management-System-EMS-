import React from 'react'



function User() {
    const user = {
        profilePicture : "https://imgs.search.brave.com/ZzwBTD37DoljD56fsKqrOYrF83M_O86MVS-8rIIlj5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjkwNjg3NTU1MzYt/YTVhZGUwZGNiNGU4/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGQy/aHBkR1VsTWpCdFlX/NThaVzU4TUh4OE1I/eDhmREE9",
        name: "Andrew Parker",
        email: "andrewparker@abccorporation.com",
        department: "Project Manager",
        organization: "ABC Corporation",
        phone: "91xxxxxxx"
    }
    return (
        <div className='container my-5' style={{height: '74vh'}}>
            <div className="user-profile">
                <h1>User Profile</h1>
                <div className="profile-details  d-felx felx-column justify-content-center align-items-center">
                    <div className="profile-picture">
                        <img src={user.profilePicture} alt="Profile" style = {{ height: "160px", width: "160px", borderRadius: '50%', border: '2px solid gray'}}/>
                    </div>
                    <div className="user-info">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Department:</strong> {user.department}</p>
                        <p><strong>Phone No.:</strong> {user.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
