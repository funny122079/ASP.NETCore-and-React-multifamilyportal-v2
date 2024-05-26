import Link from "next/link"

const category_list: string[] = ["Digital (3)", "Marketing (4)", "Design (2)", "WordPress (8)", "Plugin (5)", "Developer (3)", "Account (7)",]

const Category = () => {
   Category

   return (
      <div className="categories bg-white bg-wrapper mb-30">
         <h5 className="mb-20">Category</h5>
         <ul className="style-none">
            {category_list.map((category, i) => (
               <li key={i}><Link href="#">{category}</Link></li>
            ))}
         </ul>
      </div>
   )
}

export default Category
