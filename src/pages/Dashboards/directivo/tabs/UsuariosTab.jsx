// src/pages/Dashboards/Directivo/tabs/UsuariosTab.jsx
import React, { useState } from 'react';
import Card from '../../../../components/shared/Card';
import NewUserModal from '../../../../components/Modals/NewUserModal';
import EditUserModal from '../../../../components/Modals/EditUserModal'; // <-- IMPORTADO

const UsuariosTab = ({ showToast }) => { // Recibe showToast como prop
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false); // <-- NUEVO ESTADO
  const [selectedUser, setSelectedUser] = useState(null); // <-- NUEVO ESTADO: para el usuario a editar

  const [users, setUsers] = useState([
    // Datos de usuarios de ejemplo. CAMBIADO: roles en minúsculas para coincidir con el esquema Yup.
    { id: 1, name: 'Ana García', email: 'ana.garcia@example.com', role: 'estudiante' },
    { id: 2, name: 'Carlos Díaz', email: 'carlos.diaz@example.com', role: 'docente' },
    { id: 3, name: 'Laura Gómez', email: 'laura.gomez@example.com', role: 'directivo' },
    { id: 4, name: 'Pedro Sánchez', email: 'pedro.sanchez@example.com', role: 'estudiante' },
  ]);

  const handleCreateUser = (newUserData) => {
    console.log('Creando nuevo usuario:', newUserData);
    setTimeout(() => {
      // Asigna un ID simple para el ejemplo y añade el nuevo usuario
      const newUser = { ...newUserData, id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1 };
      setUsers((prevUsers) => [...prevUsers, newUser]);
      showToast('Usuario creado con éxito', 'success');
    }, 1000);
  };

  const handleEditUser = (updatedUserData) => { // <-- NUEVA FUNCIÓN
    console.log('Editando usuario:', updatedUserData);
    setTimeout(() => {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === updatedUserData.id ? { ...user, ...updatedUserData } : user))
      );
      showToast('Usuario actualizado con éxito', 'success');
      setIsEditUserModalOpen(false); // Cerrar modal después de la edición
      setSelectedUser(null); // Limpiar usuario seleccionado
    }, 1000);
  };

  const handleDeleteUser = (id) => {
    // Lógica para eliminar usuario (ej. llamada a API)
    setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
    showToast('Usuario eliminado', 'info');
  };

  const openEditModal = (user) => { // <-- NUEVA FUNCIÓN
    setSelectedUser(user); // Establece el usuario que se va a editar
    setIsEditUserModalOpen(true); // Abre el modal de edición
  };

  // Función auxiliar para capitalizar la primera letra del rol para la visualización en la tabla
  const capitalizeRole = (role) => {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <Card title="Gestión de Usuarios">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsNewUserModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <i className="fas fa-plus mr-2"></i> Crear Nuevo Usuario
        </button>
      </div>

      {/* Tabla de usuarios */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Correo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {/* CAMBIADO: Clases para el badge y uso de capitalizeRole */}
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${user.role === 'estudiante' ? 'bg-blue-100 text-blue-800' : ''}
                    ${user.role === 'docente' ? 'bg-green-100 text-green-800' : ''}
                    ${user.role === 'directivo' ? 'bg-purple-100 text-purple-800' : ''}
                    ${user.role === 'padre' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}>
                    {capitalizeRole(user.role)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* BOTÓN EDITAR QUE ABRE EL MODAL DE EDICIÓN */}
                  <button onClick={() => openEditModal(user)} className="text-primary-600 hover:text-primary-900 mr-4">Editar</button>
                  <button onClick={() => handleDeleteUser(user.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                  No hay usuarios registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Renderiza el modal de nuevo usuario */}
      <NewUserModal
        isOpen={isNewUserModalOpen}
        onOpenChange={setIsNewUserModalOpen}
        onSubmit={handleCreateUser}
      />

      {/* Renderiza el modal de edición de usuario */}
      {selectedUser && ( // Solo renderiza si hay un usuario seleccionado
        <EditUserModal
          isOpen={isEditUserModalOpen}
          onOpenChange={setIsEditUserModalOpen}
          onSubmit={handleEditUser}
          userData={selectedUser} // Pasa los datos del usuario seleccionado
        />
      )}
    </Card>
  );
};

export default UsuariosTab;