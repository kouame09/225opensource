import { useEffect } from 'react';
import { X, CheckCircle, Info, AlertTriangle, AlertCircle } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastProps {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
    onClose: (id: string) => void;
}

const Toast = ({ id, message, type, duration = 5000, onClose }: ToastProps) => {
    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                onClose(id);
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [id, duration, onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success':
                return <CheckCircle className="w-5 h-5" />;
            case 'info':
                return <Info className="w-5 h-5" />;
            case 'warning':
                return <AlertTriangle className="w-5 h-5" />;
            case 'error':
                return <AlertCircle className="w-5 h-5" />;
        }
    };

    const getStyles = () => {
        switch (type) {
            case 'success':
                return 'bg-white dark:bg-gray-800 border-l-4 border-l-emerald-500 border-r border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100';
            case 'info':
                return 'bg-white dark:bg-gray-800 border-l-4 border-l-blue-500 border-r border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100';
            case 'warning':
                return 'bg-white dark:bg-gray-800 border-l-4 border-l-amber-500 border-r border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100';
            case 'error':
                return 'bg-white dark:bg-gray-800 border-l-4 border-l-red-500 border-r border-t border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100';
        }
    };

    const getIconColor = () => {
        switch (type) {
            case 'success':
                return 'text-emerald-500';
            case 'info':
                return 'text-blue-500';
            case 'warning':
                return 'text-amber-500';
            case 'error':
                return 'text-red-500';
        }
    };

    return (
        <div
            className={`flex items-start gap-3 p-4 rounded-xl shadow-xl animate-slide-in ${getStyles()}`}
            role="alert"
        >
            <div className={`flex-shrink-0 mt-0.5 ${getIconColor()}`}>{getIcon()}</div>
            <div className="flex-1 text-sm font-medium whitespace-pre-line">{message}</div>
            <button
                onClick={() => onClose(id)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Fermer"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default Toast;
