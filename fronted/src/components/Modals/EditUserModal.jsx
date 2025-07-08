// src/components/Modals/EditUserModal.jsx
import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validación para la edición de usuario (similar al de nuevo usuario, pero ajustado)
const editUserSchema = yup.object().shape({
  id: yup.number().required(), // El ID es necesario para identificar al usuario
  name: yup.string()
    .required('El nombre completo es obligatorio.')
    .min(3, 'El nombre debe tener al menos 3 caracteres.'),
  email: yup.string()
    .email('El correo electrónico debe ser válido.')
    .required('El correo electrónico es obligatorio.'),
  role: yup.string()
    .oneOf(['estudiante', 'docente', 'directivo', 'padre'], 'Selecciona un rol válido.')
    .required('El rol es obligatorio.'),
  // La contraseña no es obligatoria para editar si no se va a cambiar
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres si se ingresa.')
    .notRequired(), // No es requerido para editar
});

const EditUserModal = ({ isOpen, onOpenChange, onSubmit, userData }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(editUserSchema),
    // Establecer valores por defecto del formulario al abrir el modal con userData
    defaultValues: userData || { id: null, name: '', email: '', role: '', password: '' },
  });

  // Efecto para actualizar los valores del formulario cuando userData cambie (ej. al seleccionar otro usuario para editar)
  useEffect(() => {
    if (userData) {
      reset(userData); // Reinicia el formulario con los nuevos datos del usuario
    }
  }, [userData, reset]);

  const onSubmitForm = (data) => {
    console.log('Datos del usuario editados:', data);
    onSubmit(data); // Llama a la función onSubmit pasada desde el padre
    onOpenChange(false); // Cierra el modal
    reset(); // Limpia el formulario (o lo deja listo para el siguiente edit si se reabre)
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-[99]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl focus:outline-none z-[100]">
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
            Editar Usuario
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-6">
            Modifica los datos del usuario. La contraseña solo es necesaria si deseas cambiarla.
          </Dialog.Description>

          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            {/* Campo oculto para el ID del usuario */}
            <input type="hidden" {...register('id')} />

            <div>
              <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                id="edit-name"
                {...register('name')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ej: Juan Pérez"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="edit-email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="edit-email"
                {...register('email')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="ejemplo@dominio.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="edit-password" className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña (dejar en blanco para no cambiar)
              </label>
              <input
                type="password"
                id="edit-password"
                {...register('password')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Mínimo 6 caracteres"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
            </div>
            <div>
              <label htmlFor="edit-role" className="block text-sm font-medium text-gray-700 mb-1">
                Rol del Usuario
              </label>
              <select
                id="edit-role"
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
                Guardar Cambios
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

export default EditUserModal;