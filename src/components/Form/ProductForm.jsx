import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, editProduct, fetchProducts } from "../../store/productsSlice";

const validationSchemaProduct = Yup.object({
  name: Yup.string()
    .max(20, 'Máximo 20 caracteres')
    .required('El nombre del producto es requerido'),
  barcode: Yup.string()
    .max(10, 'Máximo 10 caracteres')
    .required('El barcode es un dato requerido'),
  slug: Yup.string()
    .min(4, 'Minimo 4 caracteres')
    .max(20, 'Máximo 20 caracteres')
    .required('El slug es requerido'),
  image: Yup.string()
    .min(10, 'Minimo 10 caracteres')
    .max(500, 'Máximo 500 caracteres')
    .required('La imagen es requerido'),
  shortDescription: Yup.string()
    .min(10, 'Minimo 10 caracteres')
    .max(50, 'Máximo 50 caracteres')
    .required('La descripción corta es requerido'),
  longDescription: Yup.string()
    .min(10, 'Minimo 10 caracteres')
    .max(200, 'Máximo 200 caracteres'),
  categoryId: Yup.string()
    .required('La categoría es requerida'),
  brand: Yup.string()
    .required('La marca es requerida'),
  price: Yup.number()
    .typeError('El precio debe ser un número')
    .required('El precio es requerido')
    .positive('El precio debe ser positivo')
    .test('price-greater-than-cost', 'El precio debe ser mayor que el costo', function (value) {
      const { cost } = this.parent;
      return value > cost;
    }),
  discountPrice: Yup.number()
    .typeError('El descuento debe ser un número')
    .min(0, 'El descuento no puede ser negativo')
    .max(0.5, 'El descuento máximo es 0.50')
    .required('El descuento es requerido'),
  cost: Yup.number()
    .typeError('El costo debe ser un número')
    .required('El costo es requerido')
    .positive('El costo debe ser positivo'),
  stock: Yup.number()
    .typeError('El stock debe ser un número')
    .required('El stock es requerido')
    .integer('El stock debe ser un número entero')
    .min(0, 'El stock no puede ser negativo'),
  unit: Yup.string()
    .required('La unidad es requerida'),
  isActive: Yup.boolean()
});

export const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Obtén productos del store
  const products = useSelector(state => state.products.items);

  // Busca el producto si es edición
  const productToEdit = id ? products.find(p => String(p.id) === String(id)) : null;

  const [initialValues, setInitialValues] = useState({
    name: '',
    barcode: '',
    slug: '',
    image: '',
    shortDescription: '',
    longDescription: '',
    categoryId: '',
    brand: '',
    price: '',
    discountPrice: '',
    cost: '',
    stock: '',
    unit: '',
    isActive: true
  });

  useEffect(() => {
    // Si no hay productos cargados, los traemos
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
    // Si es edición y ya tenemos el producto, lo seteamos
    if (id && productToEdit) {
      setInitialValues(productToEdit);
    }
  }, [id, productToEdit, products.length, dispatch]);

  const onSubmitProduct = async (values, { setSubmitting, resetForm }) => {
    try {
      if (id) {
        await dispatch(editProduct({ id, product: values })).unwrap();
        alert(`Producto actualizado: ${values.name}`);
      } else {
        await dispatch(createProduct(values)).unwrap();
        alert(`Producto registrado: ${values.name}`);
      }
      resetForm();
      navigate("/admin");
    } catch (e) {
      alert("Error al registrar/actualizar el producto");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <h2>{id ? "Editar Producto" : "Crear Producto"}</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchemaProduct}
        onSubmit={onSubmitProduct}
      >
        {({ isSubmitting, errors, touched, values }) => (
          <Form>
          <div className="mb-3">
            <label className="form-label">Nombre del producto</label>
            <Field
              value={values.name}
              name="name"
              type="text"
              className= {`form-control  ${errors.name && touched.name ? 'isInvalid': '' } `}
              placeholder="Ingrese nombre del producto"
            ></Field>
            <ErrorMessage name="name" component="div" className="error-message" >
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">Barcode</label>
                <Field
                  value={values.barcode}
                  name="barcode"
                  type="text"
                  className= {`form-control  ${errors.barcode && touched.barcode ? 'isInvalid': '' } `}
                  placeholder="Ingrese el barcode"
                ></Field>
                <ErrorMessage
                  name="barcode" component="div" className="error-message">
                </ErrorMessage>
              </div>
              <div className="col-md-6">
                <label className="form-label">Slug</label>
                <Field
                  value={values.slug}
                  name="slug"
                  type="text"
                  className= {`form-control  ${errors.slug && touched.slug ? 'isInvalid': '' } `}
                  placeholder="Ingrese nombre el slug del producto"
                ></Field>
                <ErrorMessage name="slug" component="div" className="error-message">
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">URL image</label>
            <Field
              value={values.image}
              name="image"
              type="text"
              className= {`form-control  ${errors.image && touched.image ? 'isInvalid': '' } `}
              placeholder="Ingrese la url de la imagen"
            ></Field>
            <ErrorMessage name="image" component="div" className="error-message">
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción corta</label>
            <Field
              value={values.shortDescription}
              name="shortDescription"
              type="text"
              className= {`form-control  ${errors.shortDescription && touched.shortDescription ? 'isInvalid': '' } `}
              placeholder="Descripción corta del producto"
            ></Field>
            <ErrorMessage name="shortDescription" component="div" className="error-message">
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción larga</label>
            <Field
              value={values.longDescription}
              name="longDescription"
              type="text"
              className= {`form-control  ${errors.longDescription && touched.longDescription ? 'isInvalid': '' } `}
              placeholder="Descripción larga del producto"
            ></Field>
            <ErrorMessage name="longDescription" component="div" className="error-message" ></ErrorMessage>
          </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label className="form-label">Categoría</label>
                <Field
                  as="select"
                  name="categoryId"
                  className={`form-select ${errors.categoryId && touched.categoryId ? 'is-invalid' : ''}`}
                >
                  <option value="">Seleccione una categoría</option>
                  <option value="FAR">Farmacia</option>
                  <option value="SUP">Suplementos</option>
                  <option value="COS">Cosméticos</option>
                </Field>
                <ErrorMessage name="categoryId" component="div" className="error-message" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Marca</label>
                <Field
                  as="select"
                  name="brand"
                  className={`form-select ${errors.brand && touched.brand ? 'is-invalid' : ''}`}
                >
                  <option value="">Seleccione una marca</option>
                  <option value="MARCA-1">Marca 1</option>
                  <option value="MARCA-2">Marca 2</option>
                  <option value="MARCA-3">Marca 3</option>
                </Field>
                <ErrorMessage name="brand" component="div" className="error-message" />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-4">
                <label className="form-label">Precio</label>
                <Field
                  name="price"
                  type="number"
                  className={`form-control ${errors.price && touched.price ? 'is-invalid' : ''}`}
                  placeholder="Precio"
                />
                <ErrorMessage name="price" component="div" className="error-message" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Descuento (0 a 0.50)</label>
                <Field
                  name="discountPrice"
                  type="number"
                  step="0.01"
                  className={`form-control ${errors.discountPrice && touched.discountPrice ? 'is-invalid' : ''}`}
                  placeholder="Descuento"
                />
                <ErrorMessage name="discountPrice" component="div" className="error-message" />
              </div>
              <div className="col-md-4">
                <label className="form-label">Costo</label>
                <Field
                  name="cost"
                  type="number"
                  className={`form-control ${errors.cost && touched.cost ? 'is-invalid' : ''}`}
                  placeholder="Costo"
                />
                <ErrorMessage name="cost" component="div" className="error-message" />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="col-md-6">
                <label className="form-label">Stock</label>
                <Field
                  name="stock"
                  type="number"
                  className={`form-control ${errors.stock && touched.stock ? 'is-invalid' : ''}`}
                  placeholder="Stock"
                />
                <ErrorMessage name="stock" component="div" className="error-message" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Unidad</label>
                <Field
                  as="select"
                  name="unit"
                  className={`form-select ${errors.unit && touched.unit ? 'is-invalid' : ''}`}
                >
                  <option value="">Seleccione unidad</option>
                  <option value="unit">Unidad</option>
                  <option value="box">Caja</option>
                  <option value="bottle">Botella</option>
                </Field>
                <ErrorMessage name="unit" component="div" className="error-message" />
              </div>
            </div>
            <div className="mb-3 form-check">
              <Field
                name="isActive"
                type="checkbox"
                className="form-check-input"
                id="isActive"
              />
              <label className="form-check-label" htmlFor="isActive">
                Producto activo
              </label>
            </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
          >{isSubmitting ? 'Enviando...' : "Registrar" }</button>
            <Link to="/admin" className="btn btn-secondary ms-2" aria-current="page">
              Cerrar
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};