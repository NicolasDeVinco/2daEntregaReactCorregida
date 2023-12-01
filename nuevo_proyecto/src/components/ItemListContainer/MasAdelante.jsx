    // esto estaba en itemdetailcontainer:

    // const usuarioSeleccionado = usuarios.find((usuario) => usuario.id === id)

    // esto dentro del return de itemdetailcontainer:
          {/* <ItemDetail usuarioSeleccionado={usuarioSeleccionado}/> */}
    
    
    // const [producto, setProducto] = useState({}) // para traer un documento
    // const [productos, setProductos] = useState({}) // para traer la coleccion




// traer un documento. esto hay que llevarlo a detail para que traiga un producto

// useEffect(() => {
//   const dbFirestore = getFirestore()

//   const queryDoc = doc(dbFirestore, 'products', '4vcUm2ZsyI8QJrdTgcYe')
//   getDoc(queryDoc)
//   .then(resultado =>setProducto({id: resultado.id, ...resultado.data()}))
//   .catch(err => console.log(err))
// }, [])

// console.log(producto)


// traer toda la coleccion

// useEffect(() => {
//   const dbFirestore = getFirestore()

//   const queryCollection = collection(dbFirestore, 'products')
//   getDocs(queryCollection)
//   .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
//   .catch(err => console.log(err))
// }, [])

// console.log(productos)

// datos filtrados de firestore

// useEffect(() => {
//   const dbFirestore = getFirestore()

//   const queryCollection = collection(dbFirestore, 'products')

//   const queryFilter = query(queryCollection, where('categoria', '==', 'remeras')) // usar cid

//   getDocs(queryFilter)
//   .then(resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
//   .catch(err => console.log(err))
// }, [])

// console.log(productos)
