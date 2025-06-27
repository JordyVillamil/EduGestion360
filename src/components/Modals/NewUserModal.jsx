// src/components/Modals/NewUserModal.jsx
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form'; // Importar useForm
import { yupResolver } from '@hookform/resolvers/yup'; // Importar yupResolver
import * as yup from 'yup'; // Importar yup

// Definir el esquema de validación para el nuevo usuario
const newUserSchema = yup.object().shape({
  name: yup.string()
    .required('El nombre completo es obligatorio.')
    .min(3, 'El nombre debe tener al menos 3 caracteres.'),
  email: yup.string()
    .email('El correo electrónico debe ser válido.')
    .required('El correo electrónico es obligatorio.'),
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.')
    .required('La contraseña es obligatoria.'),
  role: yup.string()
    .oneOf(['estudiante', 'docente', 'directivo', 'padre'], 'Selecciona un rol válido.')
    .required('El rol es obligatorio.'),
});

const NewUserModal = ({ isOpen, onOpenChange, onSubmit }) => {
  // Inicializar react-hook-form con el resolver de Yup
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(newUserSchema),
  });

  const onSubmitForm = (data) => { // Renombrado para evitar conflicto con prop onSubmit
    console.log('Datos del nuevo usuario (validados):', data);
    onSubmit(data); // Llama a la función onSubmit pasada desde el padre
    onOpenChange(false); // Cierra el modal
    reset(); // Limpia el formulario después de enviar
  };

  // Restablecer el formulario cuando el modal se cierra
  React.useEffect(() => {
    if (!isOpen) {
      reset(); // Limpia los campos y errores cuando el modal se cierra
    }
  }, [isOpen, reset]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-[99]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl focus:outline-none z-[100]">
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
            Crear Nuevo Usuario
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-6">
            Introduce los datos para registrar un nuevo usuario en el sistema.
          </Dialog.Description>

          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4"> {/* Usar handleSubmit de react-hook-form */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                // Registrar el input con react-hook-form
                {...register('name')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ej: Juan Pérez"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ejemplo@dominio.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                {...register('password')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Mínimo 6 caracteres"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Rol del Usuario
              </label>
              <select
                id="role"
                name="role"
                {...register('role')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 bg-white ${
                  errors.role ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecciona un rol</option>
                <option value="estudiante">Estudiante</option>
                <option value="docente">Docente</option>
                <option value="directivo">Directivo</option>
                <option value="padre">Padre de Familia</option>
              </select>
              {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out"
              >
                Crear Usuario
              </button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Cerrar"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewUserModal;