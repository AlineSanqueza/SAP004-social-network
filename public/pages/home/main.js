import { createPost, readPosts, deletePost, editAndSavePost, likePosts, signOut } from './data.js';

export const home = () => {

  const container = document.createElement('div');
  container.classList.add('div-home');

  container.innerHTML = `  
  <!--<ul>
    <li>
      <select id='profile'>
      <option selected disabled>Fulana</option>
      <option id='edit-profile'>Editar Perfil<option>
      </select>
    </li>
  </ul>-->
  <div class='out'>
    <input type='image' src='imagens/sign-out.png' class='signout' id='sign-out'>
  </div>
  <div class="btn-back"></div>
  <div>
      <img class="wave" src="imagens/perfil-avatar.png">
    </div>
    <form method = 'post'> 
      <div id='write-post' class='write-post'></div>
        <div id='input-post' class='input-post'>
        <input id='post' class='post' type='text' placeholder='Para onde vamos?'>
      </div>
    <div id='container-private' class='container-private'></div>
    <div id='btn-post' class='btn-post'>
      <button id='send-post' class='send-post icon-post'>✈️</button>
      <button id='photo' class='photo icon-post'>📸</button>
    </div> 
    <select id='input-private' class='input-private' name='input-private'>
      <option id='public' class'public'>Público</option> 
      <option id='private' class='private' selected>Privado</option>
    </select>
    </div>  
      <div id='all-posts' class='all-posts'></div>
    </form>
  `;
  
  const post = container.querySelector('#post');
  const sendBtn = container.querySelector('#send-post');
  const allPosts = container.querySelector('#all-posts');
  const privacyPost = container.querySelector('#input-private');
  const exit = container.querySelector('#sign-out');
 // const editProfile = container.querySelector('#edit-profile');

  sendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    createPost(post.value, privacyPost.value);
    post.value = '';
    allPosts.innerHTML = '';
    readPosts(postTemplate);
  });

exit.addEventListener('click', (event) => {
  event.preventDefault();
  signOut();
});

/*editProfile.addEventListener('click', (event) => {
  event.preventDefault();
  profile();
});*/

  const postTemplate = (post) => {
    const now = new Date();
    const spaceTemplate = document.createElement('div');
    spaceTemplate.innerHTML = `
    
    <div id='div-post' class='div-post'>
    <div id='container-name' class='container-name'>
    <div id='div-name' class='div-name'>${post.data().name}</div>
    <div id='div-delete' class='div-delete'>
    <button id='save' data-id='${post.id}' class='save'>✔️</button>
    <button id='edit' data-id='${post.id}' class='edit'>✏️</button> 
    <button id='delete' data-id='${post.id}' class='delete'>❌</button>
    </div>
    </div>
    <textarea id='text-post' data-id='${post.id}' class='text-post' disabled>${
      post.data().text
    }</textarea>
    <div id='div-container-btn' class='div-container-btn'>
    <div id='div-btn' class='div-btn'>
    <button id='curtida' data-id= '${post.id}' class='curtida icon-post'>❤️${
      post.data().likes
    }</button>
    <button id='comentar' class='comentar icon-post'>💬${
      post.data().coments
    }</button>
    </div>
    <select id='private' class='select-private' name='input-private'>
      <option id='option-public' class='public'>Público</option> 
      <option id='option-private' class='private' selected>Privado</option>
    </select>
    <div id='div-date' class=div-date>
    <p id='privaty' class='privaty'>${post.data().privacy}</p>
    <p id='date' class='date'>${now.getDate()}/${now.getMonth()}/${now.getFullYear()}</p>
    </div>
    </div>
    </div>
    `;

    allPosts.appendChild(spaceTemplate);

    const btnSave = spaceTemplate.querySelector('#save');
    const btnEdit = spaceTemplate.querySelector('#edit');
    const editText = spaceTemplate.querySelector( `#text-post[data-id='${post.id}']`);
    const selectPrivate = spaceTemplate.querySelector('#private');
    const btnDelete = spaceTemplate.querySelector( `#delete[data-id='${post.id}']`); 
    const BtnLikes = spaceTemplate.querySelector(`#curtida[data-id='${post.id}']`);
    const BtnComentar = spaceTemplate.querySelector('#comentar');

    btnDelete.addEventListener('click', (event) => {
      event.preventDefault();
      const id = btnDelete.dataset.id;
      deletePost(id, validarDelete);
      allPosts.innerHTML = '';
      readPosts(postTemplate);
    });
    btnEdit.addEventListener('click', (event) => {
      event.preventDefault();
      editPost();
    });

    btnSave.addEventListener('click', (event) => {
      event.preventDefault();
      savePost();
    });

    const validarDelete = () => {
      if (post.data().user_id !== firebase.auth().currentUser.uid) {
        btnDelete.style.display = 'none';
      }
    };

    const editPost = () => {
      editText.disabled = false;
      editText.style.color = 'rgba(14, 60, 89, 1)';
      editText.style.background = 'white';
      btnSave.style.display = 'inline-block';
      BtnLikes.style.display = 'none';
      BtnComentar.style.display = 'none';
      selectPrivate.style.display = 'inline-block';
    };

    const savePost = () => {
      editText.disabled = true;
      editText.style.color = 'white';
      editText.style.background = 'rgba(191, 87, 26, 1)';
      btnSave.style.display = 'none';
      BtnLikes.style.display = '';
      BtnComentar.style.display = '';
      selectPrivate.style.display = 'none';
      const id = editText.dataset.id;

      editAndSavePost(id, editText.value, selectPrivate.value);
      allPosts.innerHTML = '';
      readPosts(postTemplate);
    };

    // console.log(post.id)
    const btnLikes =  spaceTemplate.querySelector(`button[data-id='${post.id}']`);
    // console.log(btnLikes);
    btnLikes.addEventListener( 'click' , () => {
      // console.log("like")
      const id = btnLikes.dataset.id
      console.log(id);
      // const id = post.id
      likePosts(id,post.data().likes);
      allPosts.innerHTML = '';
      readPosts(postTemplate);
    });
    };

  readPosts(postTemplate);
  
  return container;
};


/*const validarEdit = () => {
      if (post.data().user_id !== firebase.auth().currentUser.uid) {
        edit.style.display = 'none';
      }
    }
*/
