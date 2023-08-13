import styles from './Loading.module.css'

const Loading = () => {
    
    return (
        <div className={styles.Group}>
            <div className={styles.spinner}>
                <svg viewBox="0 0 400 400">
                    <circle cx="200" cy="200" r="20" />
                </svg>
            </div>
        </div>
    )
}

export default Loading