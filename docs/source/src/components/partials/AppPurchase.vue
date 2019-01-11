<template>
<tr>
    <td>${{ price }}</td>
    <td>{{ date }}</td>
    <td>{{ type }}</td>
    <td>{{ merchant }}</td>
    <td><label class="badge badge-teal">Approved</label></td>
</tr>
</template>

<script>
export default {
    name: 'AppPurchase',
    props: {
        price: Number,
        date: String,
        type: String,
        merchant: String
    }
}
</script>
