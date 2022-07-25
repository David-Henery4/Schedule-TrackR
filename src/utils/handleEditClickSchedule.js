
const handleEditClickSchedule = (id, data) => {
    const updatedActiveTab = data.map((a) => {
        if (a.id === id) {
        a.activeTab = !a.activeTab;
        a.editActive = false;
    }
    if (a.id !== id) {
        a.activeTab = false;
        a.editActive = false;
    }
    return a;
    });
    return updatedActiveTab
}

export default handleEditClickSchedule