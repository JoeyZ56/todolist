import styles from './Todo.module.scss';

export default function Todo({ todo, buttonAction, buttonText }) {
	console.log('todo');
	return (
		<div className={styles.todo}>
			{' '}
			{todo.title}
			<button className={styles.button} onClick={() => buttonAction(todo._id)}>
				{buttonText}
			</button>
		</div>
	);
}
