import styles from "../styles/sass/template/layout.module.scss"

const BaseTemplate = (props: {
  title: string;
  leftNav: React.ReactNode;
  rightNav: React.ReactNode;
  children: React.ReactNode
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="flex justify-between">
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-xl">
              {props.leftNav}
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-wrap gap-x-5 text-xl">
              {props.rightNav}
            </ul>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-screen-xl">
        <main className="px-2 mt-16 ">{props.children}</main>
      </div>
    </div>
  )
}

export {BaseTemplate}