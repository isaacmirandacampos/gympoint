import React, { useState, useEffect } from 'react';

import history from '../../services/history';
import api from '../../services/api';
import { Container, ScrollTable } from './styles';
import { toast } from 'react-toastify';

export default function HelpOrders() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function handleHelpOrders() {
      const response = await api.get('students/help-orders/all');
      const { helpOrders } = response.data;
      console.tron.log(response);
      setHelpOrders(helpOrders);
    }
    handleHelpOrders();
  }, []);

  return (
    <Container>
      <header>
        <h2>Gerenciando planos</h2>
      </header>
      <ScrollTable>
        <table>
          <tbody>
            <tr>
              <th>Aluno</th>
            </tr>
            {helpOrders.map(help => (
              <tr key={help.id}>
                <td>{help.students.name}</td>
                <td>
                  <button>responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollTable>
    </Container>
  );
}
