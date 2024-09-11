export default function Button({ children, link, width = 'w-full' }) {
  return (
    <a
      href={link}
      className={`mt-10 block ${width} rounded-md bg-sky-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600`}
    >
      {children}
    </a>
  )
}
