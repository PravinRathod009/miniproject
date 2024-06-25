window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");  // form access
	const input = document.querySelector("#new-task-input"); //<<<<
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
       
		const task = input.value;// new task value here.

		const task_el = document.createElement('div');//create element new div
		task_el.classList.add('task'); // that div give  class task.

		const task_content_el = document.createElement('div'); // created new 'div' 
		task_content_el.classList.add('content'); // that div create class ='content' name

		task_el.appendChild(task_content_el);  // content class div is insert to the task div .

		const task_input_el = document.createElement('input'); // input element created
		task_input_el.classList.add('text'); // input give to class 'text'
		task_input_el.type = 'text';  // input type set = 'text'.
		task_input_el.value = task;  // value set task     that access on top of program.
		task_input_el.setAttribute('readonly', 'readonly');   // attribute  'readonly'

		task_content_el.appendChild(task_input_el);  // this div insert into 
//  content class excessed variable     //text is input class name** in  'insert' into 
  


//   <------------------action class for Delete and Edit button--------------------------------->


		const task_actions_el = document.createElement('div'); // create div for action class
		task_actions_el.classList.add('actions'); //  action add to classList
		
		const task_edit_el = document.createElement('button'); // create buttton for edit 
		task_edit_el.classList.add('edit'); // give class='edit'
		task_edit_el.innerText = 'Edit'; // in button insert text  Edit

		const task_delete_el = document.createElement('button'); // create button for delete
		task_delete_el.classList.add('delete'); // give button class name='delete'. 
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);  // in action div insert edit button.
		task_actions_el.appendChild(task_delete_el);// in action div insert  delete button.

		task_el.appendChild(task_actions_el); // action div is insert to  task div is all task in this div.

		list_el.appendChild(task_el); // all task div insert into #tasks ID conteiner div

		input.value = '';

		 // After create tasks div  use for buttons
		task_edit_el.addEventListener('click', (e) => {  // set event on Edit button.
			if (task_edit_el.innerText.toLowerCase() == "edit") 
				{
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});


function toggle()
{
	 var element =document.body;
	 element.classList.toggle('light-mode')
}