// about.js
document.addEventListener('DOMContentLoaded', () => {
    const metricBox = document.getElementById('dynamicMetric');
    setTimeout(() => {
        metricBox.innerHTML = `
            <p style="font-size: 3rem; font-weight: 800; color: #0f766e; margin:0;">99.4%</p>
            <p style="text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; font-weight: 700; color: #1e293b;">Audit Accuracy Acceptance Rate</p>
        `;
    }, 250);
});