export function renderItem(item) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.purchased;
    const label = document.createElement('label');
    const span = document.createElement('span');
    span.textContent = `${item.qty} ${item.name}`;
    label.append(checkbox, span);
    return label;
}
