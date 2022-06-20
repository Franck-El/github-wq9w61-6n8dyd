export const makeBody = (): void => {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.className = "wrapper";
    wrapper.innerHTML = `
    <h1>Finance Logger</h1>

    <!-- output list -->
    <ul class="item-list">

    </ul>`;
    document.body.appendChild(wrapper);

    const footer: HTMLElement = document.createElement('footer');
    footer.innerHTML = `
    <form class="new-item-form">
        <div class="field">
            <label>Type:</label>
            <select id="type">
                <option value="invoice">Invoice</option>
                <option value="payment">Payment</option>
            </select>
        </div>
        <div class="field">
            <label>To / From:</label>
            <input type="text" id="tofrom">
        </div>
        <div class="field">
            <label>Details:</label>
            <input type="text" id="details">
        </div>
        <div class="field">
            <label>Amount (£):</label>
            <input type="number" id="amount">
        </div>
        <button>Add</button>
    </form>

    <a href="https://www.thenetninja.co.uk">The Net Ninja</a>`;

    document.body.appendChild(footer);
}