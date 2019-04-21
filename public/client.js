// f form
const fbrowse = document.getElementById('fbrowse');
const fsubmit = document.getElementById('fsubmit');
const fname = document.getElementById('file-name')
// r form
const upfile = document.getElementById('upfile');
const submit = document.getElementById('submit');

fbrowse.addEventListener('click',()=>{
  event.preventDefault;
  upfile.click();
  console.log('browse clicked ...');
});

upfile.addEventListener('change',()=>{
  if (upfile === '') { console.log('event canceled...'); } else {
  name = upfile.value.split(/\\|\//).pop();
  fname.innerHTML = name;
  }
});

fsubmit.addEventListener('click',()=>{
//
  submit.click();
//
});

const onSubmit = () => {
  event.preventDefault();
  
  console.log('file uploaded...');
  const file = document.getElementById("upfile");
  const upfile = file.files[0];
  const fileUpload = new FormData();
  fileUpload.append('file',file.files[0]);
                    
  fetch('/api/upload', {
    method: 'POST',
    body: fileUpload
  })
  .then(res=>{
    (res.ok) ? res.json().then(data=>console.log(data)) : console.log(`Error (${res.status}), ${res.statusText}.`);
  }).then(window.location.replace('/api/filemeta'))
  .catch(res=>console.log(res));
}