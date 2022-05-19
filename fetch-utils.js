const SUPABASE_URL = 'https://ibfimxopxwngijoyxknw.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY4NDQ3MSwiZXhwIjoxOTUyMjYwNDcxfQ.ewbC-sV1ELppz_IP21q0P7QEX_VoDqbi_ZZ1__Uphvs';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./list');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

export async function createListItem(name, qty) {
    const response = await client.from('shopping_items').insert({ name, qty }); // because of RLS and our default values, we add user_id for free

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function fetchListItems() {
    const response = await client.from('shopping_items').select('*').order('name');

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function togglePurchased(item) {
    console.log(item);
    const response = await client
        .from('shopping_items')
        .update({ purchased: !item.purchased })
        .match({ id: item.id });

    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}
