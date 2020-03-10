import React from 'react';

const data = {
    velopert: {
        name: "seono",
        description: "I'll become fullstack-developer"
    },
    gildong : {
        name: "Hong",
        description:"example"
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];

    if(!profile){
        return <div>Unknown</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;