import Sidebar from './comp/Sidebar'
import ContentPane from './comp/ContentPane'
import { useEffect } from 'react';
import { initSocket } from '@/config/socket';

export default function Container() {
    useEffect(() => {
        const socket = initSocket();

        console.log('socket~ ', socket)
        // Example: Emit an event
        socket.emit('clientHello', 'Hello from the client!');

        // Example: Listen for an event
        socket.on('serverHello', (data) => {
            console.log('Server says:', data);
        });

        return () => {
            // Cleanup when the component unmounts
            socket.disconnect();
        };
    }, []);

    
    return (
        <div className="flex">
            <Sidebar />
            <ContentPane />
        </div>
    )
}
