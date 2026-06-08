const lootItems = [];

const lootNameInput = document.getElementById("lootName");
const lootValueInput = document.getElementById("lootValue");
const addLootButton = document.getElementById("addLootButton");
const lootListDiv = document.getElementById("lootList");
const totalValueDiv = document.getElementById("totalValue");
const messageDiv = document.getElementById("message");

addLootButton.addEventListener("click", addLoot);

function addLoot()
{
    const lootName = lootNameInput.value.trim();
    const lootValue = Number(lootValueInput.value);

    messageDiv.textContent = "";

    if (lootName === "")
    {
        messageDiv.textContent = "Loot name cannot be empty.";
        return;
    }

    if (isNaN(lootValue) || lootValue < 0)
    {
        messageDiv.textContent = "Loot value must be a positive number.";
        return;
    }

    const loot =
    {
        name: lootName,
        value: lootValue
    };

    lootItems.push(loot);

    renderLoot();
    calculateTotal();

    lootNameInput.value = "";
    lootValueInput.value = "";
}

function renderLoot()
{
    let output = "";

    for (let i = 0; i < lootItems.length; i++)
    {
        output += `
        <p>
            ${lootItems[i].name} - $${lootItems[i].value}
        </p>
        `;
    }

    lootListDiv.innerHTML = output;
}

function calculateTotal()
{
    let total = 0;

    for (let i = 0; i < lootItems.length; i++)
    {
        total += lootItems[i].value;
    }

    totalValueDiv.textContent = `$${total}`;
}

/*
Debugging Reflection

I placed a breakpoint inside the addLoot function.

Before clicking Add Loot, the lootItems array was empty.

After clicking the button, the new loot object was added to the array using push().

The state changed immediately after the array mutation.

The screen updated only after renderLoot() and calculateTotal() updated the DOM.

This demonstrated how event-driven applications wait for user actions before changing state and updating the interface.
*/
