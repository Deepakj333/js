const container = document.querySelector('.container');
const display = (followers) => {
    
   const newFollower =  followers.map(person=>{
        const {login,avatar_url:avatarUrl,html_url:htmlUrl} = person
    
        return `
        <article class='card'>
        <img src="${avatarUrl}" alt='person' />
          <h4>${login}</h4>
        <a href="${htmlUrl}" class="btn">view profile</a>
      </article>
        `;
    
    }).join('');

    container.innerHTML = newFollower;

}

export default display
