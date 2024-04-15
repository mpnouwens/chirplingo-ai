import {Navbar} from '../components/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pr-5 pl-5 pt-2 pb-2">
      <Navbar />

      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn px-16 rounded-none">Button</button>
      <button className="btn w-64 rounded-full">Button</button>

  

      {/* <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details> */}
    </main>
  );
}
