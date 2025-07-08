// src/components/Modals/UploadDocumentModal.jsx
import React, { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validación para subir documentos
const uploadDocumentSchema = yup.object().shape({
  title: yup.string()
    .required('El título del documento es obligatorio.')
    .min(3, 'El título debe tener al menos 3 caracteres.'),
  documentFile: yup.mixed() // mixed para tipos de archivo
    .required('Debes seleccionar un archivo para subir.')
    .test('fileSize', 'El archivo es demasiado grande (máx. 5MB)', (value) => {
      return value && value[0] && value[0].size <= 5 * 1024 * 1024; // 5 MB
    })
    .test('fileType', 'Tipo de archivo no válido (solo PDF, DOCX, XLSX, JPG, PNG)', (value) => {
      return value && value[0] && ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/jpeg', 'image/png'].includes(value[0].type);
    }),
});

const UploadDocumentModal = ({ isOpen, onOpenChange, onSubmit }) => {
  const fileInputRef = useRef(null); // Para resetear el input de archivo manualmente

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(uploadDocumentSchema),
  });

  const onSubmitForm = (data) => {
    // Cuando trabajas con input de tipo 'file', el valor es un FileList
    // `data.documentFile[0]` contiene el objeto File
    console.log('Datos del documento a subir:', data.title, data.documentFile[0]);
    onSubmit(data); // Envía el título y el objeto File
    onOpenChange(false); // Cierra el modal
    reset(); // Limpia los campos del formulario
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Resetear manualmente el input de archivo
    }
  };

  // Restablecer el formulario y el input de archivo cuando el modal se cierra
  React.useEffect(() => {
    if (!isOpen) {
      reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }, [isOpen, reset]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 data-[state=open]:animate-overlayShow fixed inset-0 z-[99]" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-xl focus:outline-none z-[100]">
          <Dialog.Title className="text-2xl font-bold text-gray-800 mb-4">
            Subir Documento
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-6">
            Sube un nuevo documento al sistema. Los tipos de archivo permitidos son PDF, DOCX, XLSX, JPG, PNG (máx. 5MB).
          </Dialog.Description>

          <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            <div>
              <label htmlFor="document-title" className="block text-sm font-medium text-gray-700 mb-1">
                Título del Documento
              </label>
              <input
                type="text"
                id="document-title"
                {...register('title')}
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ej: Manual de Convivencia 2025"
              />
              {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="document-file" className="block text-sm font-medium text-gray-700 mb-1">
                Seleccionar Archivo
              </label>
              <input
                type="file"
                id="document-file"
                {...register('documentFile')}
                ref={fileInputRef} // Asignar la ref al input
                className={`w-full border rounded-md shadow-sm p-2 text-gray-700 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.documentFile ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.documentFile && <p className="mt-1 text-sm text-red-600">{errors.documentFile.message}</p>}
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
                Subir Documento
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

export default UploadDocumentModal;