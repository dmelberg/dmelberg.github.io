// Mock transfer data
const mockTransfers = [
    {
        id: "tr_30VqOs1btBHcwJsru5XW3Woe5GK",
        date: "2025-07-28T11:17:38",
        from: {
            name: "Carson Runolfsson",
            rfc: "JNDD471123XJ4",
            institution: "Cuenca",
            clabe: "723969738291465733"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "Shopping",
        amount: 10.00,
        user: "123",
        status: "rejected",
        trackingKey: "202507289073500000000000000013",
        referenceNumber: "13",
        metadata: {
            user: "123"
        },
        timeline: [
            {
                action: "Transfer was rejected",
                date: "2025-07-28T13:17:00"
            }
        ]
    },
    {
        id: "tr_2aBcDe4fgHIjkLmnOpQrStuvWxYz",
        date: "2025-07-28T10:45:22",
        from: {
            name: "Scotty Wiegand",
            rfc: "SWIE123456XJ4",
            institution: "Banamex",
            clabe: "002180701234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "probando",
        amount: 100.00,
        user: "U10",
        status: "completed",
        trackingKey: "202507289073500000000000000014",
        referenceNumber: "14",
        metadata: {
            user: "U10"
        },
        timeline: [
            {
                action: "Transfer completed",
                date: "2025-07-28T10:45:22"
            }
        ]
    },
    {
        id: "tr_3cDeFg5hiJKlMnOpQrStUvWxYzAb",
        date: "2025-07-28T09:32:15",
        from: {
            name: "Adrianne Murray",
            rfc: "AMUR789012XJ4",
            institution: "BBVA",
            clabe: "012180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "Exchange USDC",
        amount: 200.00,
        user: "user_123",
        status: "completed",
        trackingKey: "202507289073500000000000000015",
        referenceNumber: "15",
        metadata: {
            user: "user_123"
        },
        timeline: [
            {
                action: "Transfer completed",
                date: "2025-07-28T09:32:15"
            }
        ]
    },
    {
        id: "tr_4dEfGh6ijKlmNoPqRsTuVwXyZaBc",
        date: "2025-07-28T08:15:42",
        from: {
            name: "Test_holder_name",
            rfc: "THLD345678XJ4",
            institution: "Santander",
            clabe: "014180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "Transfer failed",
        amount: -10.00,
        user: "OHLM00157088",
        status: "failed",
        trackingKey: "202507289073500000000000000016",
        referenceNumber: "16",
        metadata: {
            user: "OHLM00157088"
        },
        timeline: [
            {
                action: "Transfer failed",
                date: "2025-07-28T08:15:42"
            }
        ]
    },
    {
        id: "tr_5eFgHi7jkLmnOpQrStUvWxYzAbCd",
        date: "2025-07-28T07:28:33",
        from: {
            name: "Dede Kuhlman",
            rfc: "DKUL901234XJ4",
            institution: "Banorte",
            clabe: "072180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "probanco",
        amount: -1.00,
        user: "U12",
        status: "completed",
        trackingKey: "202507289073500000000000000017",
        referenceNumber: "17",
        metadata: {
            user: "U12"
        },
        timeline: [
            {
                action: "Transfer completed",
                date: "2025-07-28T07:28:33"
            }
        ]
    },
    {
        id: "tr_6fGhIj8klMnoPqRsTuVwXyZaBcDe",
        date: "2025-07-28T06:45:18",
        from: {
            name: "Nakesha Breitenberg",
            rfc: "NBRE567890XJ4",
            institution: "HSBC",
            clabe: "021180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "Pablo inversiones",
        amount: 3045.00,
        user: "U15",
        status: "returned",
        trackingKey: "202507289073500000000000000018",
        referenceNumber: "18",
        metadata: {
            user: "U15"
        },
        timeline: [
            {
                action: "Transfer was returned",
                date: "2025-07-28T06:45:18"
            }
        ]
    },
    {
        id: "tr_7gHiJk9lmNopQrStUvWxYzAbCdEf",
        date: "2025-07-28T05:22:09",
        from: {
            name: "Sammy Jerde",
            rfc: "SJER123456XJ4",
            institution: "Banregio",
            clabe: "058180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "--",
        amount: -1000.00,
        user: "U18",
        status: "completed",
        trackingKey: "202507289073500000000000000019",
        referenceNumber: "19",
        metadata: {
            user: "U18"
        },
        timeline: [
            {
                action: "Transfer completed",
                date: "2025-07-28T05:22:09"
            }
        ]
    },
    {
        id: "tr_8hIjKl0mnOpQrStUvWxYzAbCdEfG",
        date: "2025-07-28T04:18:55",
        from: {
            name: "Hyun Mraz",
            rfc: "HMRA789012XJ4",
            institution: "Banco Azteca",
            clabe: "127180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "--",
        amount: 10.00,
        user: "U20",
        status: "returned",
        trackingKey: "202507289073500000000000000020",
        referenceNumber: "20",
        metadata: {
            user: "U20"
        },
        timeline: [
            {
                action: "Transfer was returned",
                date: "2025-07-28T04:18:55"
            }
        ]
    },
    {
        id: "tr_9iJkLm1noPqRsTuVwXyZaBcDeFgH",
        date: "2025-07-27T15:30:00",
        from: {
            name: "John Doe",
            rfc: "JDOE123456XJ4",
            institution: "Banorte",
            clabe: "072180001234567890"
        },
        to: {
            name: "Deborah Elberg Mx",
            rfc: "--",
            institution: "Fintoc",
            account: "See details >",
            clabe: "735969000000200766"
        },
        concept: "Payment pending",
        amount: 500.00,
        user: "U25",
        status: "pending",
        trackingKey: "202507279073500000000000000021",
        referenceNumber: "21",
        metadata: {
            user: "U25"
        },
        timeline: [
            {
                action: "Transfer initiated",
                date: "2025-07-27T15:30:00"
            }
        ]
    }
];

// Helper functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
    }) + ', ' + date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    });
}

function formatAmount(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    }).format(Math.abs(amount));
}

function getStatusBadge(status) {
    const statusConfig = {
        'completed': { class: '', icon: '', text: '' },
        'rejected': { class: 'status-rejected', icon: 'fas fa-undo', text: 'Rejected' },
        'returned': { class: 'status-returned', icon: 'fas fa-undo', text: 'Returned' },
        'failed': { class: 'status-rejected', icon: 'fas fa-times', text: 'Failed' },
        'pending': { class: 'status-pending', icon: 'fas fa-clock', text: 'Pending' }
    };
    
    return statusConfig[status] || statusConfig['completed'];
}

function getStatusForDetailView(status) {
    const statusConfig = {
        'completed': { class: 'status-succeeded', icon: 'fas fa-check', text: 'Succeeded' },
        'rejected': { class: 'status-rejected', icon: 'fas fa-undo', text: 'Rejected' },
        'returned': { class: 'status-returned', icon: 'fas fa-undo', text: 'Returned' },
        'failed': { class: 'status-rejected', icon: 'fas fa-times', text: 'Failed' },
        'pending': { class: 'status-pending', icon: 'fas fa-clock', text: 'Pending' }
    };
    
    return statusConfig[status] || statusConfig['completed'];
}

function canReturnTransfer(status) {
    return ['completed', 'returned'].includes(status);
}

function calculateTotals() {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    
    let totalInbound = 0;
    let totalOutbound = 0;
    
    mockTransfers.forEach(transfer => {
        const transferDate = new Date(transfer.date);
        if (transferDate.getMonth() === lastMonth.getMonth() && 
            transferDate.getFullYear() === lastMonth.getFullYear()) {
            if (transfer.amount > 0) {
                totalInbound += transfer.amount;
            } else {
                totalOutbound += Math.abs(transfer.amount);
            }
        }
    });
    
    return { totalInbound, totalOutbound };
} 